"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home () {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    authClient.signUp.email({
      email,
      name,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("User created successfully");
      }
    });
  }

  const onLogin = async () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("User created successfully");
      }
    });
  }

if(session) {
  return (
    <div className="w-fit m-auto mt-10">
      <p>Logged in as {session.user.name}</p>
      <Button onClick={() => authClient.signOut()}>
        Sign Out
      </Button>
    </div>
  );
}

return(
  <div className="flex flex-col gap-y-10">
    <div className="flex flex-col gap-4 w-[300px] m-auto mt-10">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type = "password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>
        Create User
      </Button>
    </div>
    <div className="flex flex-col gap-4 w-[300px] m-auto mt-10"> 
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type = "password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin}>
        Login
      </Button>
    </div>
  </div>
  );
};
