from rest_framework import serializers

from .models import GATE, JAM, UGC_CSIR


class GATE_Serializer(serializers.ModelSerializer):
    class Meta:
        model = GATE
        fields = "__all__"


class JAM_Serializer(serializers.ModelSerializer):
    class Meta:
        model = JAM
        fields = "__all__"


class UGC_CSIR_Serializer(serializers.ModelSerializer):
    class Meta:
        model = UGC_CSIR
        fields = "__all__"
