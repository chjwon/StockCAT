from django.http import JsonResponse, HttpResponse
# from django.template import loader
from django.shortcuts import render

def currPred(request):
    currPred = {
        "APPL": 5,
        "AMZN": 3.4,
    }
    return JsonResponse(currPred)


def pastPred(request):
    pastPred = {
        "2023-02-02T00:00:00.0000":{
            "APPL": 3,
            "AMZN": 5.6
        }
    }
    return JsonResponse(pastPred)