FROM python:3.7

COPY requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

COPY .env /app/.env

COPY ./app /app

EXPOSE 3232

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3232"]