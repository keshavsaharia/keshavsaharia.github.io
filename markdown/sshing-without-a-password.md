# SSH without a password

You are on computer A, and you want to ssh to computer B without entering the password. First, generate a public and private key on the computer you are using (computer A).

```
ssh-keygen -t rsa
```

You will see some prompts to ask you to enter a password twice. Don't type anything, just press enter right away.

```
Generating public/private rsa key pair.
Enter file in which to save the key (/.../.ssh/id_rsa): 
Created directory '/.../.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /.../.ssh/id_rsa.
Your public key has been saved in /.../.ssh/id_rsa.pub.
The key fingerprint is:
3e:4f:05:79:3a:9f:96:7c:3b:ad:e9:58:37:bc:37:e4 a@A
```

If the other computer has not had SSH initialized, you should either log in to the computer and run `mkdir -p .ssh`, or remotely run the command to create a .ssh folder.

```
ssh userb@computerb mkdir -p .ssh
```

Now, append your public key (in the `id_rsa.pub` file) to the file named `authorized_keys` in computer B. This can be done
from the command line by piping the `cat` output to the `ssh` command. 

```
cat .ssh/id_rsa.pub | ssh userb@computerb 'cat >> .ssh/authorized_keys'
```

You will have to enter the password for user b one last time. After appending your public key, future SSH commands will not prompt for a password, and remote
execution can take place in a script without needing to inject passwords.
