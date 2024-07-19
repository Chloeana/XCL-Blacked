
## Introduction

Hi friends!

If you're here, you're likely either making or have made a playable character using Multiple Character Framework (MCF)  
and you want to utilize my Blacked mod to bring BBC to your beautiful character.

These templates are intended to be used as an addition to an existing playable character.  
It assumes you have already released mod for your character.  

If you do not want to use this as a separate module (meaning a separate download on Lover's Lab)  
and would instead like to include it in your original code, you will need to make those adjustments to your existing 
passages yourself.

The process is *hopefully* straightforward.


## Files and Directory Structure

### Images

- Single square image of your character giving a BBC BJ. Background removed, Pink background (#fb94b2). 540x540
    - `img/characters/bj/bbc/[character id].jpg`
- Single square image of your character receiving a BBC from behind. 540x540. *Background is optional (I removed mine, but it's full background in the base game) This is the image that displays on the bottom right, below the NPC*
    - `img/characters/sex/doggy/bbc/[character id].jpg`
- Single vertical image of your character moaning while receiving a BBC from behind. Full background. 960x540.
    - `img/characters/sex/doggy/moan/bbc/[character id].jpg`
- Single horizontal image of your character receiving a BBC from behind. Full background. 540x960. *This is the image that displays in the center right before doggy*
    - `img/characters/sex/insert/bbc/[character id].jpg`
- Single vertical image, same as doggy/moan except it's missionary. 960x540. *It's kind of hard to get the angle to show both her moaning and a black guy on her, so if you can't find one just pick a good shot of her face.*
    - `img/characters/sex/missionary/moan/bbc/[character id].jpg`
- Four vertical images (1 through 4). Inserting from behind. 960x540.
    - `img/scenes/characters/[character id]/sex/doggy/bbc/transactional insert 1.jpg`
- Four vertical images (1 through 4). Moaning from behind. 960x540. *Angle might not allow for showing the black guy with her, best effort like with the other moan picture.*
    - `img/scenes/characters/[character id]/sex/doggy/bbc/moan 1.jpg`

### Videos

*Most of the time, the number of clips is up to the modder, you specify the number of videos in the code. Use existing girls as a reference.*

- Facefucking
    - `img/scenes/characters/[character id]/bj/bbc/rough 1.mp4`
- Normal Blowjob
    - `img/scenes/characters/[character id]/bj/bbc/transactional 1.mp4`
- Cumshot (Body) 
    - `img/scenes/characters/[character id]/cum/bbc/body 1.mp4`
- Cumshot (Face)
    - `img/scenes/characters/[character id]/cum/bbc/facial 1.mp4`
- Cumshot (Mouth)
    - `img/scenes/characters/[character id]/cum/bbc/mouth 1.mp4`
- Creampie
    - `img/scenes/characters/[character id]/cum/bbc/creampie/1.mp4`
- Kissing
    - `img/scenes/characters/[character id]/foreplay/bbc/kiss.mp4`
- Grope Tits/Ass
    - `img/scenes/characters/[character id]/foreplay/bbc/group tits.mp4` / `img/scenes/characters/[character id]/foreplay/bbc/group ass.mp4`
    - Can have one or both
- Cunninlingus
    - `img/scenes/characters/[character id]/oral/bbc/oral 1.mp4`
- Doggy
    - `img/scenes/characters/[character id]/sex/doggy/bbc/transactional 1.mp4`
    - These are videos associated with "non-bedroom sex" (aka hookup sex), like in the bar or club.
- Positions
    - `img/scenes/characters/[character id]/sex/active/`
    - `img/scenes/characters/[character id]/sex/passive/`
    - Positions share the same directories as non-black directories. Follow guidelines for positions below.

## Positions

I've included a template to facilitate adding positions (MCF-Blacked-Positions-Template.js)

Black positions co-exist with non-black positions. This means they're in the same directories and thus need to have a unique name. 
You cannot have two "reverse cowgirl.mp4" files in the same directoy. 
Therefore you cannot have two positions named "reverse cowgirl".

In order for a position to be picked up and sorted as a position to be used with a black man, you must add the tag "black" to the position.
Without it, the game will erroneously show it during an encounter with a non-black man.
You can add additional tags as well (and please do), but ensure that "black" is among them.

Lastly, ensure there are at least 3 **ACTIVE** positions with a skill level of 3 or lower.
The `starting positions` passage does an initial check for positions with a skill level of 3 and below, then creates the character's position inventory from this.
If you do not have at least 3 "black" positions, you'll encounter an error.

On that note ^ if your users add your module and then try to play an existing save file, the black positions may not get added. 
This would be because the position inventory was already built and doesn't override itself when `starting positions` runs again.
Your character's position inventory continues to update as you unlock additional positions. So worst case scenario, they may just have to unlock them this way.
(I'm still thinking of a way to combat this, but backburned it for now)


## MCF Coding

Refer to the `MCF-Blacked-Template.twee` file for MCF specific instructions.
There aren't a lot of passages to edit and I've left details instructions inside the template.


## Meta files

Lastly, to ensure the proper load order, you must add "Blacked" as a required mod.
I've included a sample .meta file for reference on how to do that. Be sure to fill in the details for you and your mod.

## Conclusion
If you need help, join us on the X-Change Life discord and ask for help in the modding section!
https://discord.com/invite/ethWsZSbHW

Love and happy modding!
:heartpulse: Chloe :spades:
