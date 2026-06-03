'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import Image from "next/image";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // hook up your auth logic here
    };

    return (
        <div className="min-h-screen flex">

            {/* LEFT — Form */}
            <div className="w-[50%] flex flex-col justify-between px-16 py-12 bg-white">

                {/* Logo */}
                <Link href="/" className="text-[22px] font-bold tracking-tight text-black">
                    Flatlogic<span className="text-[#c97a4a]">.</span>
                </Link>

                {/* Form */}
                <div className="w-full max-w-[480px]">
                    <h1 className="text-[28px] font-bold text-[#222] mb-10">Login</h1>

                    <form onSubmit={handleLogin} className="flex flex-col gap-6">

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#333]">Email</label>
                            <input
                                type="email"
                                placeholder="admin@flatlogic.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-[52px] border border-[#d5d5d5] px-4 text-[15px] text-[#333] placeholder:text-[#bbb] outline-none focus:border-[#c97a4a] transition"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#333]">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="········"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-[52px] border border-[#d5d5d5] px-4 pr-12 text-[15px] text-[#333] placeholder:text-[#bbb] outline-none focus:border-[#c97a4a] transition"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((p) => !p)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#555] transition"
                                >
                                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <Link href="/register" className="text-[14px] text-[#c97a4a] hover:underline">
                                Create an account
                            </Link>
                            <button
                                type="submit"
                                className="w-[180px] h-[52px] bg-[#c97a4a] text-white text-[14px] font-bold tracking-widest hover:opacity-90 transition"
                            >
                                LOGIN
                            </button>
                        </div>

                    </form>
                </div>

                {/* Footer links */}
                <div className="flex gap-10">
                    <Link href="/" className="text-[13px] text-[#c97a4a] hover:text-[#999] transition">
                        Terms & Conditions
                    </Link>
                    <Link href="/" className="text-[13px] text-[#c97a4a] hover:text-[#999] transition">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-[13px] text-[#c97a4a] hover:text-[#999] transition">
                        Forgot password
                    </Link>
                </div>
            </div>

            {/* RIGHT — Image */}
            <div className="relative w-[50%]">
                <Image
                    src="/images/blog/image1.png"
                    alt="Login"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>);
}