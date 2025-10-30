import { useState } from "react"
import { Calendar, Clock } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface DeliveryTimePickerProps {
  selectedTime: string
  onTimeChange: (time: string) => void
}

export const DeliveryTimePicker = ({
  selectedTime,
  onTimeChange,
}: DeliveryTimePickerProps) => {
  const [scheduledDate, setScheduledDate] = useState<string>("")
  const [scheduledTime, setScheduledTime] = useState<string>("")

  const timeSlots = [
    "12:00 PM - 12:30 PM",
    "12:30 PM - 1:00 PM",
    "1:00 PM - 1:30 PM",
    "1:30 PM - 2:00 PM",
    "2:00 PM - 2:30 PM",
    "2:30 PM - 3:00 PM",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Time</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={selectedTime} onValueChange={onTimeChange}>
          <div className="space-y-3">
            <div
              className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedTime === "asap"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted"
              }`}
              onClick={() => onTimeChange("asap")}
            >
              <RadioGroupItem value="asap" id="asap" />
              <Clock className="h-5 w-5 text-muted-foreground" />
              <Label htmlFor="asap" className="flex-1 cursor-pointer">
                <div className="font-medium">Deliver as soon as possible</div>
                <div className="text-xs text-muted-foreground">
                  Estimated: 30-40 minutes
                </div>
              </Label>
            </div>

            <div
              className={`p-3 rounded-lg border ${
                selectedTime === "scheduled"
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => onTimeChange("scheduled")}
              >
                <RadioGroupItem value="scheduled" id="scheduled" />
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="scheduled" className="flex-1 cursor-pointer">
                  <div className="font-medium">Schedule for later</div>
                  <div className="text-xs text-muted-foreground">
                    Choose your preferred time
                  </div>
                </Label>
              </div>

              {selectedTime === "scheduled" && (
                <div className="mt-4 space-y-3 pl-9">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm">
                      Select Date
                    </Label>
                    <input
                      type="date"
                      id="date"
                      className="w-full p-2 border rounded-md bg-background"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">Select Time Slot</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot}
                          type="button"
                          variant={
                            scheduledTime === slot ? "default" : "outline"
                          }
                          size="sm"
                          className="text-xs"
                          onClick={() => setScheduledTime(slot)}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
