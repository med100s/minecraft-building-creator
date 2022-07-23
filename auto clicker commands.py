

from pynput import keyboard
from pynput.keyboard import Key, Controller
import time
import win32clipboard 

keyboard2 = Controller()


with open('full script.txt') as f:
    lines = f.readlines()
    command = lines 
    # print(command) 
commands = command



def on_press(key):
    print(key)
    
    if key ==  keyboard.Key.enter: 
        pass
        # print('did it')
        # # keyboard.type(Key.backspace)
        # time.sleep(0.5)
        # keyboard2.type('t')
        # time.sleep(0.5)
    elif key == keyboard.Key.page_down: 
        for i in range(len(commands)): 
            time.sleep(0.06)
            keyboard2.type('t')
            time.sleep(0.06)
            
            win32clipboard.OpenClipboard()
            win32clipboard.EmptyClipboard()
            win32clipboard.SetClipboardText(commands[i])
            win32clipboard.CloseClipboard() 

            keyboard2.press(Key.ctrl.value)
            keyboard2.press('v')
            keyboard2.release('v')
            # keyboard.release(Key.ctrl.value) #this would be for your key combination
            keyboard2.release(Key.cmd.value)
            keyboard2.press(Key.enter)
             
        
        # keyboard2.type('/ hepp;s')
        # keyboard2.type( )

def on_release(key):
    print('{0} released'.format(
        key))
    if key == keyboard.Key.shift_r:
        keyboard2.release(Key.cmd.value)
        # Stop listener
        return False

# Collect events until released
with keyboard.Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()

# ...or, in a non-blocking fashion:
listener = keyboard.Listener(
    on_press=on_press,
    on_release=on_release)
listener.start()
