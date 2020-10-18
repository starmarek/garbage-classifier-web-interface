from django.urls import include, path
from rest_framework import routers

from .views.vue_view import IndexTemplateView

router = routers.DefaultRouter()
# router.register("tlconfig", TestlineViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
    # Vue app
    path("", IndexTemplateView.as_view(), name="entry-point"),
]
