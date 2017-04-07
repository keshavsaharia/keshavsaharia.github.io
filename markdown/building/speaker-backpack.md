# Turning a backpack into a portable speaker system

One of my friends got a backpack with some low-powered speakers sewn into it. The two small, low-quality speakers with no external power source need to draw power from the headphone jack, so they can't be very loud.

![]({{url}}/img/building/backpack/1.jpg)

In an effort to make the backpack louder, I was commissioned to put a completely new speaker system into the backpack. I did some research online into compact speakers and portable power, and found very little information on both. There are quite a few commercially-sold speaker backpacks, but they all feature horrible speakers and no subwoofer.

So I agreed to set about the task of implementing a custom power system and subwoofer into this backpack. With a budget of $120 and a roll of duct tape, I was able to turn this weak backpack
into a portable speaker system. Here's how.

## The Materials

- **Duct tape**
If you are more crafty and have access to tools beyond the scope of what would be available to a college freshman living in a dorm, you might want to substitute the duct tape with a sturdier means of holding things together.

- **Wire** and **alligator clips**
These will be used for the batteries. I picked these up for a couple dollars at the campus electronics store.

- **Scissors**

- **Logitech S220 2.1 speaker system** - After considerable online hunting, I finally settled on these speakers. They are very affordable (~$20) and come with a subwoofer. Their size and weight makes them perfect for a portable speaker system.

![]({{url}}/img/building/backpack/2.jpg)

- **Duracell pocket inverter 100** - This is an inverter designed to plug into the cigarette lighter in your car- I stripped the wire and connected it to alligator clips, allowing me to draw DC power from something other than a car battery.

![]({{url}}/img/building/backpack/3.jpg)

- 2 Tenergy 3000 mAh 7.2V Nimh batteries - I ordered these elsewhere online, but I realized today that Amazon has a much better deal on these. Two of these hooked up in series provides 14.4 V of DC current, and 3000 mAh equates to about 3-4 hours of full-volume music. I also picked up a charger for these batteries online (just a standard tamiya connector).

![]({{url}}/img/building/backpack/4.jpg)

## The Backpack

In this case, I used the one that my buddy gave me, but if you are building your own you want to look for a sturdy backpack that you wouldn't have difficulty cutting into.

## The Plan

The basic idea is to make a backpack that has a source of AC power, in order to drive the speakers. The use of an AC outlet makes it possible to use pretty much any type of speaker out there- in this case, I chose to use the lightest ones I could find. The inverter is the AC power source, and draws energy from the Tenergy battery packs, which in series form a 14.4 V DC power supply.

## The Construction Process

1) **Strip down the Duracell inverter.** Cut off the male plug that goes into a car's cigarette lighter and strip the wire. The brown wire corresponds to the positive terminal, and the blue corresponds to the negative terminal.

2) **Hook the batteries up in series to the inverter.** I was initially doing a more complex circuit with voltage dividers and such, but I realized that its not really necessary seeing as the inverter can accept 10.5 - 15 V DC. All the wiring is done with alligator clips, but obviously you can be more sophisticated and use connectors/breadboards to do the wiring. You want the batteries to be connected as a power source to the inverter- a task easier said than done.

One of the issues I had with the batteries was the output voltage, which sometimes turned out to exceed the 15 V limit of the inverter. To fix this, I added some resistance to the battery to limit the maximum current and to reduce the voltage across the inverter.

3) **Strip down the backpack.** Using scissors and duct tape, I cleared space for the speakers to fit into the backpack. I first took out the existing low-powered speakers and threw them away. Then, I cut off excess fabric layers, since most backpacks tend to be made out of multi-layer fabric that will create annoying interference if not cut off. I then cut holes in the backpack to allow wires to go between compartments, and took off various unnecessary flaps of material.

![]({{url}}/img/building/backpack/5.jpg)

4) **Create a speaker unit to fit into the backpack.** The basic idea is that you want to create a speaker assembly that will slide into the backpack and remain snugly fit inside of it. The unit should consist of both the speakers, the subwoofer, and some padding to prevent damage to the speakers.

I started by duct taping a cardboard shield to the subwoofer's output. The cardboard shield ensures that the fabric of the backpack is not making direct contact with the speakers- if the subwoofer is directly against the fabric, it will make a very noticeable buzzing sound from the backpack fabric vibrating. The cardboard shield pushes the fabric out about half an inch- I later ended up cutting various holes in the backpack to minimize resonance in the fabric layers.

![]({{url}}/img/building/backpack/6.jpg)

After taping the cardboard shield, I cut up an old t-shirt and used it to create padding for the bottom of the subwoofer. I cut a hole in the padding to prevent muffling the subwoofer's output.

![]({{url}}/img/building/backpack/7.jpg)

I taped this padding onto the bottom of the subwoofer, and used some other cut-up fabric to create sheaths for the two speakers on either side of the subwoofer. Repeating the process on the other side gives a pretty solid duct-tape-heavy unit that can be slid into the backpack.

![]({{url}}/img/building/backpack/8.jpg)

The wires and speakers are all duct taped to the subwoofer to reduce clutter. The control knob of the speaker is taped to On and full volume, so when we connect power to this subwoofer it will be ready to go. With the speaker unit all set, it is slid into the backpack compartment and adjusted into place.

![]({{url}}/img/building/backpack/9.jpg)

5) **Cut holes in the backpack to prevent unwanted resonance.** Imagine the fabric of the backpack as a bunch of springs woven together. Assuming this fabric is stretched and twisted randomly in various directions, there are many different frequencies at which parts of the fabric would resonate. Because of this, the amount of fabric has to be minimized, and multi-layered areas of fabric had to be stripped down to one layer.

6) **Hook it up to the inverter.** This last step is the simplest- plug the speaker into the inverter and place the inverter-battery system somewhere safe in the backpack. In this case, I put them inside a small pocket on the top of the backpack, where they fit surprisingly well.

![]({{url}}/img/building/backpack/10.jpg)

7) **Make some noise.** Here's a video of the backpack on its initial test run. The guy in the video is the person who I made the backpack for, and ostensibly the song choice is also his.
