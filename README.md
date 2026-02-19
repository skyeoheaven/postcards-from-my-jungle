# postcards-from-my-jungle

the whole goal of this project was basically to fake an ecosystem that feels real enough even though none of it actually exists. so the strategy was less about perfection and more about convincing vibes.

for the image model i trained a diffusion model on a small real animal dataset. instead of trying to immediately get good results, i ran short training cycles repeatedly and previewed the outputs after each run. this helped me stop when shapes started looking like creatures instead of melted blobs. i also increased the resolution from 64 to 128 later because diffusion models learn structure first and detail later. small batches were important since the gpu memory runs out fast otherwise. the model wasn’t really learning specific species but more like fur textures, eyes, and silhouettes, which is exactly what makes them feel believable.

for the sounds i used a pretrained audio diffusion model and treated it like a field recorder for a jungle that doesn’t exist. the prompts were written as environments instead of specific animals because that gave more organic results. generating multiple waveforms and picking the least artificial sounding ones helped a lot. most outputs sounded like wind, birds, and movement layered together which actually works better than clean creature noises.

the language was generated using a transformer model with strict rules about syllables and repetition. the important part was banning real words and forcing short phrases so they feel like calls instead of sentences. repetition makes them feel animal-like really fast.

to improve quality, the images mainly need longer training and a bigger dataset. right now they look dreamlike because the model barely saw enough examples to fully stabilize shapes. sounds would improve by generating many candidates and layering multiple outputs instead of using one file. language quality would improve by building phoneme rules instead of just prompting, so each creature has its own dialect instead of all sharing one style.
