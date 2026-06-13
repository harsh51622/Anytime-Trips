from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


# ================= USER =================
class User(AbstractUser):
    ROLE_CHOICES = (
        ('traveller', 'Traveller'),
        ('agency', 'Agency'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)


# ================= TRIPS =================
class Trips(models.Model):
    agency = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="trips"
    )
    name = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    days = models.IntegerField()
    amount = models.IntegerField()
    image = models.ImageField(upload_to='trips/')

    def __str__(self):
        return self.name


# ================= ORDER =================
class Order(models.Model):

    PAYMENT_CHOICES = (
        ('UPI', 'UPI'),
        ('CARD', 'Card'),
        ('NETBANKING', 'Net Banking'),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    number = models.CharField(max_length=15)
    address = models.TextField()
    email = models.EmailField()
    payment_method = models.CharField(max_length=20, choices=PAYMENT_CHOICES)
    total_price = models.DecimalField( max_digits=10, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.payment_method}"


# ================= ORDER ITEM =================
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    trips = models.ForeignKey(Trips, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.trips.name


# ================= CART =================
class Cart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"Cart {self.id}"

    @property
    def total(self):
        return sum(item.subtotal for item in self.items.all())


class CartItems(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    trips = models.ForeignKey(Trips, on_delete=models.CASCADE)
    members = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.members} x {self.trips.name}"

    @property
    def subtotal(self):
        return self.members * self.trips.amount