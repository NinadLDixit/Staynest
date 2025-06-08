from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.homepage,name='home'),
    path('users/', include('users.urls')), 
    path("properties/", include("properties.urls")), # Include the users app's URL patterns
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)