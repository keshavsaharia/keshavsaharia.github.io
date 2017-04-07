# Add Your Coffee Maker to the Internet of Things

My interest in the [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_Things) began when I found my way to the Wikipedia article on [HTCPCP](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) (Hyper Text Coffee Pot Control Protocol). HTCPCP is a proposed standard for communicating with coffee pots over the Internet. During some free time this weekend, I built a prototype coffee maker that uses HTCPCP to allow my computer to control the coffee brewing process.

![](/img/building/coffeemaker/1.jpg)

A couple years after building the first coffee maker, I adapted this project into the Arduino curriculum at [techlab](https://techlab.education), and used the Arduino Ethernet shield to make it a completely web-based and RESTful solution - check out our [github](https://github.com/techlabeducation/arduino).

## The Materials

 - **A cheap coffee maker** ($20)
 - **An Arduino** ($10 - $20)
 - **Arduino Ethernet shield** (optional, $25)
 - **4 channel relay module** ($12)

## Process

First, break open your coffee maker (at your own risk) and remove the chip behind the buttons.

![](/img/building/coffeemaker/2.jpg)

Then, solder wires to opposite diagonals of the button components on the chip. You can use a ruler to reference between the two sides of the board, as it is important to be soldering onto the correct point. The other end of the two wires gets connected to a relay module, which can switch an isolated electrical current and be powered by a small device like the Arduino.  

![](/img/building/coffeemaker/3.jpg)

I used a piece of scrap wood to mount the relay module onto the coffeemaker.

![](/img/building/coffeemaker/4.jpg)

I then attached the Arduino and wired everything together.  

![](/img/building/coffeemaker/5.jpg)

The next step would be to take an Arduino Ethernet shield and attach it to the Arduino, which would allow you to communicate with it via Ethernet. Right now all of the code is on the [github page](https://github.com/techlabeducation/arduino), and I'll transfer the interesting parts over to here sometime soon.

**Update**: At [techlab](https://techlab.education), we built [arduinoroom.com](http://arduinoroom.com), to streamline the process of connecting and controlling the Ethernet shield.
