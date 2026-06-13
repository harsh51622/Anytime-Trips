from django.shortcuts import render
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import *
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import HttpResponse

def reset_admin(request):
 User = get_user_model()

    return JsonResponse(
        list(User.objects.values(
            "id",
            "username",
            "email",
            "is_superuser"
        )),
        safe=False
    )

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data= request.data) #frontend data save in serializer

    if serializer.is_valid():
        serializer.save()
        return Response({'message':'user is successful saved'}, status=201)

    return Response(serializer.errors, status = 400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_Profile(request):
    user = request.user

    return Response({
        'username': user.username,
        'role': user.role
    })



@api_view(['POST'])
@permission_classes([IsAuthenticated])

def create_trip(request):

    print(request.data)
    print(request.FILES)

    serializer = TripsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save(agency=request.user)
        return Response({"message": "trip added"}, status=201)

    print(serializer.errors)

    return Response(serializer.errors, status=400)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])

def update_trip(request, id):

    try:

        trip = Trips.objects.get(
            id=id,
            agency=request.user
        )

    except Trips.DoesNotExist:

        return Response({
            "error": "Trip not found"
        }, status=404)


    serializer = TripsSerializer(

        trip,

        data=request.data,

        partial=True
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message": "Trip Updated"
        })

    return Response(
        serializer.errors,
        status=400
    )

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])

def delete_trip(request, id):

    try:

        trip = Trips.objects.get(
            id=id,
            agency=request.user
        )

    except Trips.DoesNotExist:

        return Response({
            "error": "Trip not found"
        }, status=404)


    trip.delete()

    return Response({
        "message": "Trip Deleted"
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])

def get_trips(request):
    user = request.user
    if user.role == 'agency':
        trips = Trips.objects.filter(agency = user)

    else:
        trips = Trips.objects.all()

    serializer = TripsSerializer(trips, many = True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def gettripid(request, id):
    trips = Trips.objects.get(id=id)
    serializer = TripsSerializer(trips)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCart(request):

    cart = Cart.objects.filter(user=request.user)

    serializer = CartSerializer(cart, many=True)

    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])    
def addCart(request):
    serializer = CartSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])  
def deleteCart(request, id):

    cart = Cart.objects.get(id=id)

    cart.delete()

    return Response({
        "message": "Cart deleted"
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def checkout(request):
    user = request.user
    number = request.data.get("number")
    address = request.data.get("address")
    email = request.data.get("email")
    payment_method = request.data.get("payment_method")
    cart = request.data.get("cart")
    total = 0
    trip_details = ""

    # CREATE ORDER
    order = Order.objects.create(
        user=user,
        number=number,
        address=address,
        email=email,
        payment_method=payment_method,
        total_price=0
    )

    # SAVE ORDER ITEMS
    for item in cart:
        print(item)
        trip_id = item.get("id") or item.get("trips")
        trip = Trips.objects.filter(id=trip_id).first()
        # IF TRIP NOT FOUND
        if not trip:
            continue

        quantity = item.get("quantity", 1)
        total += trip.amount * quantity

        # EMAIL DETAILS
        trip_details += f"""
Trip Name: {trip.name}
Quantity: {quantity}
Price: ₹{trip.amount}

"""

        # SAVE ORDER ITEM
        OrderItem.objects.create(
            order=order,
            trips=trip,
            quantity=quantity
        )

    # UPDATE TOTAL
    order.total_price = total
    order.save()

    # EMAIL SUBJECT
    subject = "Booking Confirmation - Anytime Trips"

    # EMAIL MESSAGE
    message = f"""
Hello {user.username},

Thanks for booking with Anytime Trips ❤️

Your booking has been confirmed successfully.

========================
BOOKING DETAILS
========================

{trip_details}

========================

Total Amount: ₹{total}

Payment Method: {payment_method}

Address:
{address}

We hope you enjoy your journey ✈️

Thanks,
Anytime Trips
"""

    # SEND EMAIL
    try:
        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )
    except Exception as e:
        print(f"Error sending email: {e}")

    return Response({
        "message": "Order Placed Successfully & Email Sent"
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def order_history(request):
    orders = Order.objects.filter(user=request.user).order_by('-created_at')
    serializer = OrderSerializer(orders,many=True)
    return Response(serializer.data)



