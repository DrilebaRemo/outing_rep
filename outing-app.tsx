"use client"

import { useState } from "react"
import { Search, MapPin, Filter, Plus, MessageCircle, Compass, Users, Gamepad2, User, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OutingApp() {
  const [activeCategory, setActiveCategory] = useState("Restaurants")
  const [activeTab, setActiveTab] = useState("Discover")

  const categories = ["Restaurants", "Bars", "Coffee", "Entertainment", "Outdoor", "Shopping"]

  const venues = [
    {
      id: 1,
      name: "The Rooftop Lounge",
      type: "Bar & Grill",
      rating: 4.5,
      distance: "0.8 km",
      price: "$$$",
      status: "Open",
      tags: ["Trendy", "Lively"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Cozy Corner Cafe",
      type: "Coffee Shop",
      rating: 4.2,
      distance: "1.2 km",
      price: "$$",
      status: "Open",
      tags: ["Quiet", "Cozy"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Adventure Bowling",
      type: "Entertainment",
      rating: 4.7,
      distance: "2.1 km",
      price: "$$",
      status: "Closed",
      tags: ["Family-Friendly", "Fun"],
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const bottomNavItems = [
    { id: "Discover", icon: Compass, label: "Discover" },
    { id: "Friends", icon: Users, label: "Friends" },
    { id: "Games", icon: Gamepad2, label: "Games" },
    { id: "Profile", icon: User, label: "Profile" },
  ]

  return (
    <div className="min-h-screen bg-gradient-cosmic text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-dark-primary/90 backdrop-blur-lg border-b border-electric-cyan/20">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold bg-gradient-aurora bg-clip-text text-transparent">OutingApp</h1>
          <div className="flex items-center gap-2 px-3 py-1 bg-gradient-card rounded-full border border-sunset-orange/30">
            <div className="w-2 h-2 bg-sunset-orange rounded-full animate-pulse"></div>
            <span className="text-sunset-orange font-semibold">Streak: 12</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-electric-cyan w-5 h-5" />
          <Input
            placeholder="Search places, friends, activities..."
            className="pl-10 bg-dark-secondary/50 border-electric-cyan/30 text-white placeholder:text-gray-400 focus:border-electric-cyan focus:ring-electric-cyan/20"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-electric-cyan" />
            <span>Downtown Area</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="bg-dark-secondary/50 border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap ${
                activeCategory === category
                  ? "bg-gradient-aurora text-dark-primary font-semibold shadow-lg"
                  : "bg-dark-secondary/50 border-electric-cyan/30 text-gray-300 hover:bg-electric-cyan/10 hover:text-electric-cyan"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-gradient-aurora hover:opacity-90 text-dark-primary font-semibold py-3 animate-glow">
            <Plus className="w-5 h-5 mr-2" />
            Create Outing
          </Button>
          <Button
            variant="outline"
            className="bg-dark-secondary/50 border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan/10 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Group Chat
          </Button>
        </div>
      </div>

      {/* Near You Section */}
      <div className="px-4 pb-20">
        <h2 className="text-xl font-semibold mb-4 text-electric-cyan">Near You</h2>
        <div className="space-y-4">
          {venues.map((venue) => (
            <Card
              key={venue.id}
              className="bg-gradient-card border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/20"
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-dark-accent rounded-lg flex items-center justify-center border border-electric-cyan/20">
                    <div className="w-8 h-8 bg-gradient-aurora rounded opacity-60"></div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white">{venue.name}</h3>
                        <p className="text-sm text-gray-400">{venue.type}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-sunset-orange text-sunset-orange" />
                        <span className="text-sm font-medium text-sunset-orange">{venue.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{venue.distance}</span>
                      <span>{venue.price}</span>
                      <Badge
                        variant={venue.status === "Open" ? "default" : "secondary"}
                        className={
                          venue.status === "Open"
                            ? "bg-aurora-green/20 text-aurora-green border-aurora-green/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {venue.status}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      {venue.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-neon-purple/10 text-neon-purple border-neon-purple/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark-primary/95 backdrop-blur-lg border-t border-electric-cyan/20">
        <div className="flex items-center justify-around py-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 p-3 ${
                  isActive ? "text-electric-cyan" : "text-gray-400 hover:text-electric-cyan"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-electric-cyan" : ""}`} />
                <span className="text-xs">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
