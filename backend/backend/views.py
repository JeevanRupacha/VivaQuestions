from django.db.models import query
from django.shortcuts import render
from rest_framework import viewsets

from .serializers import(SubjectSerializer, QuestionSerializer, AnswerSerializer)
from .models import(Subject, Question, Answer)

class SubjectViewSet(viewsets.ModelViewSet):
  serializer_class = SubjectSerializer

  def get_queryset(self):
        """
        """
        queryset = Subject.objects.all()

        return queryset
  
class QuestionViewSet(viewsets.ModelViewSet):
  serializer_class = QuestionSerializer
  def get_queryset(self):
        """
        """
        queryset = Question.objects.all()
        subjectId = self.request.query_params.get('subjectId')
        if subjectId is not None:
          queryset = queryset.filter(subjectId=subjectId)

        return queryset

class AnswerViewSet(viewsets.ModelViewSet):
  serializer_class = AnswerSerializer
  def get_queryset(self):
        """
        """
        queryset = Answer.objects.all()
        questionId = self.request.query_params.get('questionId')
        if questionId is not None:
          queryset = queryset.filter(questionId=questionId)


        return queryset
