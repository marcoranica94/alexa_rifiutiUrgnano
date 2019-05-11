# Build An Alexa Rifiuti Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />


## How i created a alexa Skill

I installed aws-cli from https://developer.amazon.com/it/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html
1) launch ask init to connect my pc - aws/alexa console
2) launch ask new and set the name
3) launch ask deploy and now there are 
    - Json in AlexaConsole 
    - Dode in AWS 

### This is a simple tutorial to introduce a simple Alexa skill and code.

## Skill Architecture

* INVOCATION ***Aprire rifiuti Urgnano***
Returns the waste that will be collected the next morning

* INTENTS
    1. ***quando il {SlotTrash}***
       ***quando devo portare il {SlotTrash}***
       Returns the first collection date of the requested waste


## SlotType
*SlotTrash* 
 * Indumenti usati
 * Vetro e Lattine 
 * Secco 
 * Plastica 
 * Organico
 * Carta 

 