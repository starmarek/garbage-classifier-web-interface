from django.urls import path

from ..tfpredict.views import Predict
from .views.vue_view import IndexTemplateView


urlpatterns = [
    path("api/predict", Predict.as_view()),
    # Vue app
    path("", IndexTemplateView.as_view(), name="entry-point"),
]
