import os
import requests
import json
from langchain_openai import OpenAI
from langchain.output_parsers import PydanticOutputParser
from dotenv import load_dotenv
import pandas as pd
from datetime import datetime

# Local file path
filepath = os.path.join(os.getcwd(), "main", "ai", "files", "records.csv")

# Remote repo file path
# filepath = os.path.join("travel_ai_app", "files", "records.csv")

def get_model(llm_model):

    load_dotenv()
    return OpenAI(model_name=llm_model,
                    temperature=1, 
                    max_tokens = 3072)

def get_parser(model):
        
    return PydanticOutputParser(pydantic_object=model)

def brave_search(image: str):
    api_key = "BSA3zaxKaiuR4M-5F3BOna-6lFSfWnW"
    url = "https://api.search.brave.com/res/v1/images/search"    

    headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip",
        "X-Subscription-Token": api_key
        }

    params = { "q": image,
        "search_lang": "en",
        "count": 1
        }

    try:
        res = requests.get(url, headers=headers, params=params)
        img_json = json.loads(res.text)
        img = img_json["results"][0]["properties"]["url"]
        print(img)
        return img
    except Exception as e:
        print(e)
        return None
    
def create_records(location: str, image: str):
    
    df = pd.read_csv(filepath)
    data =  df.to_dict(orient='records')
    
    for d in data:
        entry = str(d["location"])
        if location.lower() in entry.lower():
            return 

    new_data = {"location": location, "image": image, "age": datetime.now()}
    data.append(new_data)
    df = pd.DataFrame(data)
    df.to_csv(filepath, index=False)
    

def get_records(location: str):

    df = pd.read_csv(filepath)
    data =  df.to_dict(orient='records')

    for d in data:
        entry = str(d["location"])
        if location.lower() == entry.lower():
            return d["image"]

    return None    

