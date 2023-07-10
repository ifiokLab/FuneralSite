from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from allauth.account.models import EmailAddress

class SocialAccountAdapter(DefaultSocialAccountAdapter):
    def save_user(self, request, sociallogin, form=None):
        user = super().save_user(request, sociallogin, form=form)
        if user.email and not EmailAddress.objects.filter(email=user.email, user=user).exists():
            EmailAddress.objects.create(user=user, email=user.email, primary=True, verified=True)
        return user
