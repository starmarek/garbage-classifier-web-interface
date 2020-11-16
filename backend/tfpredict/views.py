from rest_framework.views import APIView
from rest_framework.response import Response
import time
import backend.settings as sett
import os


class Predict(APIView):
    def post(self, request):
        folder_name = f'{sett.MEDIA_ROOT}/{time.time()}'
        os.mkdir(folder_name)
        for key, value in request.FILES.items():
            with open(f'{folder_name}/{key}', 'wb+') as destination:
                for chunk in value.chunks():
                    destination.write(chunk)
        return Response({"message": "Hello, world!"})
