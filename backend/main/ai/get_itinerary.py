
from langchain.prompts import PromptTemplate
from time import sleep
from main.ai.schemas import Summary
from main.ai.tools.get_tools import get_parser, get_records, create_records, brave_search, get_model


async def get_itinerary(city: str, days: int, mode: str, view: str):
    
    temp = []

    llm = get_model("gpt-3.5-turbo-instruct")
    parser = get_parser(Summary)

    template = """
        Provide a brief summary/historical and current events of the {location} 
        
        Provide an itinerary based on the {location} for a {days}-day trip.
        Traveller is traveling {mode} and wants to see {view}. 
        Make a section for each day and location, then provide a detailed description of each section.
        Provide distance (how many minutes) and directions how to get to the new location 
        with means of transportation if possible. 
        Make the distance more descriptive.

        Consider the demography of the location, if distance between locations cannot be reached by bus 
        in 6 hours, exclude the location.
        
        Provide these as if you are a tourist guide
        \n{format_instructions}\n
    """
    prompt = PromptTemplate(
        template=template,
        input_variables=["location", "days", "mode", "view"],
        partial_variables={"format_instructions": parser.get_format_instructions()},
    )
    
    # And a query intended to prompt a language model to populate the data structure.
    prompt_and_model = prompt | llm
    output = prompt_and_model.invoke({
                                "location": city, 
                                "days": days, 
                                "mode": mode,
                                "view": view
                                })
    summary = parser.invoke(output)
    print(summary)
    for loc in summary.details:

        img = get_records(loc.location)

        if not img:
            print(f"image not found for {loc.location}")
            img = brave_search(loc.location)

            if img: 
                create_records(loc.location, img)
                sleep(2)
            else:
                img = "https://placeholder-no-img.jpg"

        entry = {
              "title": f"{loc.day} - {loc.location}",
              "distance": loc.distance,
              "review": loc.review,
              "photo": img
            }
        temp.append(entry)
    
    payload = {"summary": summary.summary, "itinerary": temp}
    return payload





