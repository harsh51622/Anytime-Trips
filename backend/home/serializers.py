from rest_framework import serializers
from .models import User, Trips, CartItems, Cart, Order, OrderItem

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)

    class Meta:
        model = User
        fields = ['username', 'password', 'role']

    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            password = validated_data['password'],
            role = validated_data['role']
        ) 

        return user


        
class TripsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trips
        fields = '__all__'
        read_only_fields = ['agency']

class CartItemSerializer(serializers.ModelSerializer):

    trips_name = serializers.CharField(source='trips.name', read_only=True)
    trips_price = serializers.IntegerField(source='trips.amount', read_only=True)
    subtotal = serializers.ReadOnlyField()

    class Meta:
        model = CartItems
        fields = '__all__'           
    

class CartSerializer(serializers.ModelSerializer):

    items = CartItemSerializer(many=True)
    total = serializers.ReadOnlyField()

    class Meta:
        model = Cart
        fields = '__all__'  


class OrderItemSerializer(serializers.ModelSerializer):

    trips = TripsSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(
        many=True,
        read_only=True
    )

    class Meta:

        model = Order

        fields = '__all__'            