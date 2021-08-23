from rest_framework.routers import DefaultRouter,SimpleRouter
from django.urls import path, include


from .views import(
    SubjectViewSet,
    QuestionViewSet,
    AnswerViewSet,
)

## Using default router 
## It provides all the CRUD route by default 
router = DefaultRouter()

# route for all the product list 
router.register(f'subjects', SubjectViewSet, 'Subject')
router.register(f'questions', QuestionViewSet, 'Question')
router.register(f'answers', AnswerViewSet, 'Answer')


urlpatterns = [
    path('', include(router.urls)),
]