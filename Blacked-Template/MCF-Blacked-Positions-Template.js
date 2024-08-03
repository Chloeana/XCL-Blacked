/*
Your positions that correlate with bbc scenes MUST ALWAYS contain the tag "black". 
If it does not, it will not get picked up as an option with black encounters. 
You can include whatever other tags you like, just ensure "black" is in there.
No "black" tag = no black position or it shows up with non-black guys.

You must set at least 3 ACTIVE positions to a skill level of 3 or below. 
This is what controls the character's starting unlocked positions. 
If they do not have 3, then the positions fails to load at the start of a scene.

Leaving some examples in here, but essentially it's the same as a normal MCF playable character's positions

Black positions are part of the same position inventory/database as the non-black ones, so your name have to be unique!
You cannot have "reverse cowgirl" for both a black and non-black position.
You could just add "BBC" to it, but that's a little boring imo.
You may have to get a little creative with your names, but you can do it. I believe in you.

<3
-Chloe
*/

init_character_for_position("character_id")

positions("character_id", "passive", "service", 
    {
        "name": "facefuck",
        "flavor": "Your throat is his fleshlight.",
        "type": "passive",
        "subtype": "service",
        "position": "blowjob",
        "athletics": 8,
        "roughness": 10,
        "your pleasure": 0,
        "pleasure factor": "oral",
        "his pleasure": 7,
        "his satisfaction": 10,
        "rhythm": 500,
        "tags": ["black", "sloppy", "close to crotch", "deepthroat", "facefuck", "submissive", "helpless", "mandhandled"],
        "skill": "gag reflex",
        "skill level": 7,
        "locations": ["bed", "couch"]
    }
)

positions("character_id", "active", "missionary",
    {
        "name": "slow and sensual",
        "flavor": "Almost feels like prom night.",
        "type": "active",
        "subtype": "missionary",
        "position": "missionary",
        "athletics": 2,
        "roughness": 2,
        "your pleasure": 6,
        "pleasure factor": "both",
        "his pleasure": 5,
        "his satisfaction": 6,
        "rhythm": 500,
        "tags": ["black", "kiss", "balls deep", "romantic"],
        "skill": "active sex",
        "skill level": 2,
        "locations": ["bed", "couch"]
    }
)

positions("character_id", "passive", "missionary",
    {
        "name": "legs up squat",
        "flavor": "He holds you down while he impales you.",
        "type": "passive",
        "subtype": "missionary",
        "position": "missionary",
        "athletics": 6,
        "roughness": 6,
        "your pleasure": 5,
        "pleasure factor": "both",
        "his pleasure": 7,
        "his satisfaction": 8,
        "rhythm": 500,
        "tags": ["black", "legs in the air", "balls deep", "boobs jiggle"],
        "skill": "passive sex",
        "skill level": 4,
        "locations": ["bed", "couch"]
    },
    {
        "name": "standing fuck",
        "flavor": "He's holding you up by your ass, as he slams into your pussy.",
        "type": "passive",
        "subtype": "missionary",
        "position": "missionary",
        "athletics": 9,
        "roughness": 9,
        "your pleasure": 9,
        "pleasure factor": "both",
        "his pleasure": 9,
        "his satisfaction": 10,
        "rhythm": 500,
        "tags": ["black", "butt view", "legs in the air", "balls deep", "manhandled", "grab butt", "standing fuck", "drain"],
        "skill": "passive sex",
        "skill level": 8,
        "locations": ["standing"]
    }
)

positions("character_id", "active", "cowgirl",
    {
        "name": "romantic riding",
        "flavor": "His hands on your hips, he guides you down onto his cock.",
        "type": "active",
        "subtype": "cowgirl",
        "position": "cowgirl",
        "athletics": 2,
        "roughness": 4,
        "your pleasure": 6,
        "pleasure factor": "length",
        "his pleasure": 5,
        "his satisfaction": 6,
        "rhythm": 500,
        "tags": ["black", "butt view", "romantic"],
        "skill": "active sex",
        "skill level": 2,
        "locations": ["bed", "couch"]
    },
    {
        "name": "pole rider",
        "flavor": "He holds you in place while he impales you.",
        "type": "active",
        "subtype": "cowgirl",
        "position": "cowgirl",
        "athletics": 5,
        "roughness": 9,
        "your pleasure": 8,
        "pleasure factor": "length",
        "his pleasure": 9,
        "his satisfaction": 10,
        "rhythm": 500,
        "tags": ["black", "boobs jiggle", "manhandled", "balls smacking"],
        "skill": "active sex",
        "skill level": 7,
        "locations": ["bed", "couch"]
    }
)

positions("character_id", "passive", "cowgirl",
    {
        "name": "hair hold",
        "flavor": "He grabs your hair, holding you in place while he pounds you.",
        "type": "passive",
        "subtype": "cowgirl",
        "position": "cowgirl",
        "athletics": 6,
        "roughness": 8,
        "your pleasure": 7,
        "pleasure factor": "both",
        "his pleasure": 9,
        "his satisfaction": 10,
        "rhythm": 500,
        "tags": ["black", "butt view", "grab hair", "manhandled"],
        "skill": "passive sex",
        "skill level": 4,
        "locations": ["bed", "couch"]
    },
    {
        "name": "walking on sunshine",
        "flavor": "... and it makes you feel good.",
        "type": "passive",
        "subtype": "cowgirl",
        "position": "cowgirl",
        "athletics": 8,
        "roughness": 8,
        "your pleasure": 9,
        "pleasure factor": "both",
        "his pleasure": 9,
        "his satisfaction": 10,
        "rhythm": 500,
        "tags": ["black", "boobs jiggle", "grab waist", "balance with feet"],
        "skill": "passive sex",
        "skill level": 7,
        "locations": ["bed", "couch"]
    }
)

positions("character_id", "active", "doggy",
    {
        "name": "flamingo fuck",
        "flavor": "Balancing on one leg, he bends you over the couch.",
        "type": "active",
        "subtype": "doggy",
        "position": "doggystyle",
        "athletics": 8,
        "roughness": 9,
        "your pleasure": 8,
        "pleasure factor": "both",
        "his pleasure": 9,
        "his satisfaction": 10,
        "rhythm": 500,
        "tags": ["black", "manhandled", "balls deep", "boobs jiggle","balls smacking","eye contact", "drain"],
        "skill": "active sex",
        "skill level": 7,
        "locations": ["couch"]
    }
)

positions("character_id", "passive", "doggy",
    {
        "name": "fucktoy",
        "flavor": "Your name is now Fucktoy. You belong to him.",
        "type": "passive",
        "subtype": "doggy",
        "position": "doggystyle",
        "athletics": 10,
        "roughness": 10,
        "your pleasure": 10,
        "pleasure factor": "both",
        "his pleasure": 10,
        "his satisfaction": 10,
        "rhythm": 500,
        "tags": ["black", "manhandled", "grab hair", "grab waist", "balls smacking", "drain"],
        "skill": "passive sex",
        "skill level": 10,
        "locations": ["bed", "couch"]
    },
    {
        "name": "sidefuck",
        "flavor": "Is it supposed to feel this good?",
        "type": "passive",
        "subtype": "doggy",
        "position": "doggystyle",
        "athletics": 4,
        "roughness": 6,
        "your pleasure": 8,
        "pleasure factor": "both",
        "his pleasure": 8,
        "his satisfaction": 8,
        "rhythm": 500,
        "tags": ["black", "grab waist", "balls deep", "boobs jiggle"],
        "skill": "passive sex",
        "skill level": 4,
        "locations": ["couch"]
    }
)
