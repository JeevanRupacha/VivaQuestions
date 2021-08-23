from django.db import models

class Subject(models.Model):
  title = models.CharField(verbose_name=('title of subject'),
  max_length=500)

  id = models.CharField(verbose_name=('subject id'),
  max_length=100,
  unique=True,
  primary_key=True)

class Question(models.Model):
  id = models.CharField(verbose_name=('question id'),
  max_length=100,
  unique=True,
  primary_key=True)

  question = models.TextField(verbose_name=('questions'),
  )
  author = models.CharField(verbose_name=('author of question'),
  max_length=500,)
  subjectId = models.ForeignKey(
    Subject,
    verbose_name=("Subject Id"),
    on_delete=models.CASCADE,
    related_name="Subject"
  )

class Answer(models.Model):
  answer = models.TextField(verbose_name=('answer'),
  )
  author = models.CharField(verbose_name=('author of answer '),
  max_length=500,)
  questionId = models.ForeignKey(
    Question,
    verbose_name=("Question Id"),
    on_delete=models.CASCADE,
    related_name="Question"
  )
  id = models.CharField(verbose_name=('Answer  id'),
  max_length=100,
  unique=True,
  primary_key=True)
