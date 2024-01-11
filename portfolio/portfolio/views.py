from django.shortcuts import render

def home(request):
    return render(request, 'portfolio/index.html', {'title': 'home'})

def photo(request):
    return render(request, 'portfolio/photography.html', {'title': 'Photography'})
def hi(request):
    return render(request, 'portfolio/tp.html')