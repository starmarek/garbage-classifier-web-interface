import os
import shutil
import time

from rest_framework.response import Response
from rest_framework.views import APIView

import backend.settings as sett

from .utils.predict import predict_files


class Predict(APIView):
    def post(self, request):
        folder_name = f"{sett.MEDIA_ROOT}/{time.time()}"
        os.makedirs(folder_name)
        for key, value in request.FILES.items():
            with open(f"{folder_name}/{key}", "wb+") as destination:
                for chunk in value.chunks():
                    destination.write(chunk)
        predicted_list = predict_files(folder_name)
        data_to_send = dict(zip(os.listdir(folder_name), predicted_list))
        shutil.rmtree(folder_name)
        return Response(data_to_send, status=200)
