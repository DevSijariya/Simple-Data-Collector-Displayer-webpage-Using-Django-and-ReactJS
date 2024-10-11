from django.contrib import admin
from .models import UserData  # Import your model

# Register the model with the admin site
admin.site.register(UserData)