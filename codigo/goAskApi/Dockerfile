FROM python:3.7

RUN python3 -V

RUN python3 -m pip --version

COPY requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

COPY .env /app/.env

COPY ./app /app

EXPOSE 80

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]