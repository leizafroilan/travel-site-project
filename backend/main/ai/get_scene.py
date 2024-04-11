from langchain.prompts import PromptTemplate
from time import sleep
from main.ai.schemas import Scenes
from main.ai.tools.get_tools import get_parser, get_records, create_records, brave_search, get_model


async def get_scene(city: str):
    

    llm = get_model("gpt-3.5-turbo-instruct")
    parser = get_parser(Scenes)

    template = """
        Based on the {location}, give a list of least 5 to 10(maximum) scenic view types.
        Example of output is Nature, Mountains, Theme Parks.

        \n{format_instructions}\n
    """
    prompt = PromptTemplate(
        template=template,
        input_variables=["location"],
        partial_variables={"format_instructions": parser.get_format_instructions()},
    )
    
    # And a query intended to prompt a language model to populate the data structure.
    prompt_and_model = prompt | llm
    output = prompt_and_model.invoke({
                                "location": city, 
                                })

    list_of_scenes = parser.invoke(output)
    return list_of_scenes.scenes

