# Use Python as base image
FROM python:3.10.9

# Update package lists and install required packages
RUN apt-get update && \
    apt-get install -y \
    # Add any additional packages you need here \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /travel-site-project/backend

# Copy the necessary files from host to container
COPY . /travel-site-project/backend

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Run uvicorn command when the container starts
CMD ["uvicorn", "main.api.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
