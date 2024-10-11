from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import UserData
from .serializers import UserDataSerializer

@api_view(['POST'])
def add_user_data(request):
    print(request.data)  # Check what data is being received
    serializer = UserDataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    print(serializer.errors)  # Log the errors if data is not valid
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def get_user_data(request):
    users = UserData.objects.all()
    serializer = UserDataSerializer(users, many=True)
    return Response(serializer.data)
