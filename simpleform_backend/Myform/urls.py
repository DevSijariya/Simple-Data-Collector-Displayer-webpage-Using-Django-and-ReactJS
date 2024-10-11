from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_user_data, name='add_user_data'),
    path('list/', views.get_user_data, name='get_user_data'),
]
