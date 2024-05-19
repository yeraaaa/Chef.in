'use client'

import React from 'react';  
import { useChat, Message } from "ai/react"
import Link from 'next/link';

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    return (
        <div>
            <header className="flex justify-between items-center mb-4 bg-blue-500 p-6 w-full h-20">
                <div className="flex items-center space-x-8">
                    <span className="text-3xl font-bold text-white">Chef.in</span>
                    <nav className="flex space-x-4">
                    <Link 
                    href="/" 
                    className="text-lg font-medium px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-900"
                    >
                    Recipes
                    </Link>
                    <Link 
                    href="/chat" 
                    className="text-lg font-medium px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-900"
                    >
                    Chat
                    </Link>
                    </nav>
                </div>
            </header>

            {messages.map((message: Message) => {
                return (
                    <div className="mx-20 grid grid-cols-1" key={message.id}>
                        {message.role === 'assistant'
                            ? <h3 className="text-lg font-semibold mt-2 text-[#1E40AF]">ChefChat</h3>
                            : <h3 className="text-lg font-semibold mt-2 justify-self-end text-blue-500">You</h3>
                        }
                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return (
                                    <p key={message.id + index}>&nbsp;</p>
                                );
                            } else {
                                return (
                                    <div className="w-full grid grid-cols-1" key={message.id + index}>
                                        {message.role === 'user'
                                            ? <p className="text-md justify-self-end flex items-end justify-end mt-2 text-white bg-[#3B82F6] p-2 rounded-lg">{currentTextBlocks}</p>
                                            : <p className="text-md bg-[#1E3A8A] justify-self-start mt-2 text-white p-2 rounded-lg">{currentTextBlocks}</p>
                                        }
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
            <div className="h-full p-12">
                <form className="mx-24 mb-4 fixed inset-x-0 bottom-0" onSubmit={handleSubmit}>
                    <input
                        className="rounded-md mt-2 w-full bg-blue-500 text-white p-2"
                        placeholder={'Ask something...'}
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button className="rounded-md border-2 bg-blue-500 text-white hover:bg-[#1E3A8A] hover:text-black transition-all p-2 mt-2 font-bold">
                        Send
                    </button>
                    <footer className="text-center text-sm text-gray-500">
                    made by Yerassyl Serik
                    </footer>
                </form>
            </div>
        </div>
    );
}
