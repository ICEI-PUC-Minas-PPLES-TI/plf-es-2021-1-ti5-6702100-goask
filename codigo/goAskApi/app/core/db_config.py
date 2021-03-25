from dotenv import load_dotenv
import os

load_dotenv()


def DATABASE_URL():
    DB_CONNECTION: str = os.getenv('DB_CONNECTION')
    DB_HOST: str = os.getenv('DB_HOST')
    DB_PORT: str = os.getenv('DB_PORT')
    DB_DATABASE: str = os.getenv('DB_DATABASE')
    DB_USERNAME: str = os.getenv('DB_USERNAME')
    DB_PASSWORD: str = os.getenv('DB_PASSWORD')
    return str(
        DB_CONNECTION + "://" + DB_USERNAME + ":" + DB_PASSWORD + "@" + DB_HOST + ":" + DB_PORT + "/" + DB_DATABASE)

