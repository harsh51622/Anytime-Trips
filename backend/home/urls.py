from .views import *
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns=[
    path('register/', register),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('user_Profile/', user_Profile),
    path('trip/<int:id>/', gettripid),
    path('create-trip/', create_trip),
    path('get_trips/', get_trips),
    path("reset-admin/", reset_admin),
    path('getCart/', getCart),
    path('addCart/', addCart),
    path('deleteCart/<int:id>/',deleteCart),
    path('checkout/', checkout),
    path('order-history/',order_history),
    path('update-trip/<int:id>/', update_trip),
    path('gettripid/<int:id>/', gettripid),
    path('delete-trip/<int:id>/', delete_trip),
]
