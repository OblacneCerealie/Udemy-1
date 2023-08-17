import random

def simple_ai_bot(user_input):
    responses = [
        "Hello there!",
        "How can I assist you?",
        "Nice to chat with you!",
        "What's on your mind?",
        "Tell me more!",
        "I'm here to help.",
        "That's interesting!",
        "Let's talk about that.",
    ]
    
    return random.choice(responses)

def main():
    print("Simple AI Chatbot")
    print("Type 'exit' to end the conversation.")
    
    while True:
        user_input = input("You: ")
        
        if user_input.lower() == "exit":
            print("AI: Goodbye!")
            break
        
        response = simple_ai_bot(user_input)
        print("AI:", response)

if __name__ == "__main__":
    main()