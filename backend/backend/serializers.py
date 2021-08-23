from rest_framework import serializers
from .models import(Subject, Question, Answer)

class AnswerSerializer(serializers.ModelSerializer):
  class Meta():  
    model = Answer
    fields= ('id','answer','author','questionId')

class QuestionSerializer(serializers.ModelSerializer):
  # answers = AnswerSerializer(many= True, read_only = True)
  class Meta():
    model = Question
    fields= ['id','question','author','subjectId']


class SubjectSerializer(serializers.ModelSerializer):
  # questions = QuestionSerializer(many=True, read_only=True)
  class Meta():
    model = Subject
    fields= ["id","title"]
