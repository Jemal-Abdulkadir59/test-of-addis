import { useState } from "react"
import { Briefcase, Home, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

interface SavedAddress {
  id: string
  label: string
  address: string
  icon: any
}

interface AddressFormProps {
  formData: {
    customerName: string
    customerEmail: string
    customerPhone: string
    deliveryAddress: string
    apartment: string
    deliveryInstructions: string
  }
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const savedAddresses: SavedAddress[] = [
  {
    id: "home",
    label: "Home",
    address: "123 Main Street, Apartment 4B, London, SW1A 1AA",
    icon: Home,
  },
  {
    id: "work",
    label: "Work",
    address: "456 Office Tower, Floor 12, London, EC2A 4BX",
    icon: Briefcase,
  },
]

export const AddressForm = ({ formData, onInputChange }: AddressFormProps) => {
  const [selectedAddress, setSelectedAddress] = useState<string>("custom")
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery"
  )

  const handleAddressSelect = (addressId: string) => {
    setSelectedAddress(addressId)
    const address = savedAddresses.find((a) => a.id === addressId)
    if (address) {
      const event = {
        target: {
          name: "deliveryAddress",
          value: address.address,
        },
      } as React.ChangeEvent<HTMLTextAreaElement>
      onInputChange(event)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup
          value={deliveryType}
          onValueChange={(v) => setDeliveryType(v as any)}
        >
          <div className="flex gap-4">
            <div className="flex items-center space-x-2 flex-1">
              <RadioGroupItem value="delivery" id="delivery" />
              <Label htmlFor="delivery" className="cursor-pointer">
                Delivery
              </Label>
            </div>
            <div className="flex items-center space-x-2 flex-1">
              <RadioGroupItem value="pickup" id="pickup" />
              <Label htmlFor="pickup" className="cursor-pointer">
                Pickup
              </Label>
            </div>
          </div>
        </RadioGroup>

        {deliveryType === "delivery" && (
          <>
            <div className="space-y-2">
              <Label>Saved Addresses</Label>
              <div className="space-y-2">
                {savedAddresses.map((addr) => {
                  const Icon = addr.icon
                  return (
                    <button
                      key={addr.id}
                      type="button"
                      onClick={() => handleAddressSelect(addr.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-colors ${
                        selectedAddress === addr.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 mt-0.5 text-primary" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            {addr.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {addr.address}
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedAddress("custom")}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Address
                </Button>
              </div>
            </div>

            {selectedAddress === "custom" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="customerName">Full Name *</Label>
                  <Input
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={onInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customerPhone">Phone Number *</Label>
                  <Input
                    id="customerPhone"
                    name="customerPhone"
                    type="tel"
                    value={formData.customerPhone}
                    onChange={onInputChange}
                    placeholder="+44 7700 900000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryAddress">Street Address *</Label>
                  <Textarea
                    id="deliveryAddress"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={onInputChange}
                    placeholder="123 Main Street, London"
                    rows={2}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apartment">
                    Apartment / Floor (Optional)
                  </Label>
                  <Input
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={onInputChange}
                    placeholder="Apt 4B, Floor 2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryInstructions">
                    Delivery Instructions
                  </Label>
                  <Textarea
                    id="deliveryInstructions"
                    name="deliveryInstructions"
                    value={formData.deliveryInstructions}
                    onChange={onInputChange}
                    placeholder="e.g., Ring the bell, leave at door"
                    rows={2}
                  />
                </div>
              </>
            )}
          </>
        )}

        {deliveryType === "pickup" && (
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Burger Palace</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  45 King Street, London, WC2E 8JD
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Ready for pickup in 20-30 minutes
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
