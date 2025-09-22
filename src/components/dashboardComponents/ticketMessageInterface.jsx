"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, MoveLeft } from "lucide-react"
import Link from "next/link"
import { mockMessages } from "@/utils/utils"


const TicketMessageInterface = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser] = useState("customer");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        content: newMessage,
        sender: currentUser,
        timestamp: new Date(),
        senderName: currentUser === "customer" ? "Sarah Johnson" : "Mike Chen",
        senderAvatar:
          currentUser === "customer"
            ? "/professional-woman-diverse.png"
            : "/professional-man.png",
      };
      setMessages([...messages, message]);
      setNewMessage("");
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const otherUser = currentUser === "customer" ? "vendor" : "customer";
  const otherUserName =
    currentUser === "customer" ? "Mike Chen" : "Sarah Johnson";

  return (
    <div className="flex rounded flex-col h-screen  mx-auto ">
      <div className="flex items-center gap-4 mb-6">
        <Link href={"/dashboard/tickets"}>
          <Button size={"sm"}>
            <MoveLeft />
            Back 
          </Button>
        </Link>
        <h2 className="lg:text-2xl  sm:text-xl text-base font-semibold text-gray-700">
          Messages with vendor
        </h2>
      </div>
      {/* Header */}
      <div className="flex rounded-t-md  p-4 border-b border-border rounded-none bg-card">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={
                currentUser === "customer"
                  ? "/placeholder.svg?height=40&width=40&query=professional man"
                  : "/placeholder.svg?height=40&width=40&query=professional woman"
              }
              alt={otherUserName}
            />
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              {otherUserName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-card-foreground text-balance">
              {otherUserName}
            </h2>
            <p className="text-xs text-muted-foreground">
              {currentUser === "customer" ? "Vendor" : "Customer"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-white overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === currentUser ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage
                src={message.senderAvatar || "/placeholder.svg"}
                alt={message.senderName}
              />
              <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                {message.senderName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div
              className={`flex flex-col max-w-[70%] sm:max-w-[60%] ${
                message.sender === currentUser ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 text-pretty ${
                  message.sender === currentUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-card-foreground border border-border"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1 px-1">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border rounded-none bg-card">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-input border-border focus:ring-ring"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send  message</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketMessageInterface;
