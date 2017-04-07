A while back, I embarked on the arduous project of programming a translator to convert English sentences to their Swahili equivalents. I would later realize that I had chosen to make a translator for one of the most difficult languages, both syntactically and semantically. In Swahili, nouns, verbs, adjectives, and sentence formation are all modified by the context of the sentence. Prefixes, suffixes, and infixes can all be added to words to modify them, and almost all of the conjugation rules have various irregular exceptions.

Take, for example, the simple English sentence "I am going to the store." In Swahili, the equivalent sentence is "Mimi ninaenda dukani." The subject, "I", translates to "mimi" in Swahili. The verb, however, translates to "ninaenda", a conjugation of the infinitive "kuenda". Verbs generally have two prefixes attached to them � the subject prefix, which in this case would be "ni" (me), and a tense prefix, which in this case is "na" (present tense). The noun "store" translates to "duka", but is conjugated as "dukani" because the subject is going to a place. Unlike the simple conjugation rules of English, Swahili words have distinct conjugations for certain words based on the nouns and verbs that they are in the context of.

Also, there is no equivalent to "the", or for that matter, the words "a" and "an". If I want to say "I have a book", I say *"Mimi nina kitabu."* If I want to say "I have books", it is *"Mimi nina vitabu."* The noun changes from *kitabu* to *vitabu* if it is plural or singular, and modifies other words according to the "noun class" that it belongs to.

With an SQL database of Swahili nouns, verbs, and adjectives, I was able to parse through subject-predicate sentences and return a fairly accurate Swahili equivalent. Since this project is still in progress, I uploaded the source code to [github](https://github.com/keshavsaharia/Swahili-Translator), so you can pull it from there if you want to play with it or contribute.

## The recursive descent parser

A recursive descent parser is used by compilers to parse through source code for an input language. It takes a sequential input stream, and tries to recursively use member functions to analyze the stream.

For my students who may be reading this, here is my best analogy: imagine Santa�s workshop. One day, Santa comes in and asks his main elf to make a toy that can talk, is colored green, has flashing lights, and can hold his change. The poor elf, overwhelmed with Santa�s request, resigns. Santa decides he will replace the elf with a robotic elf, and asks his computer scientist elves to write a program to do the main elf�s job. The computer scientist elves know that Santa gives incredibly specific requirements, and if one had to program a robotic elf to take the place of that elf, the robotic elf would have to be able to account for millions of different possible specifications by Santa, in no particular order. The elves decide to partition the worker elves into various "workgroups" � a group that can make toys talk, another group that can make toys move, another that can color them, and so on, for as many generalized requirements that Santa may have. Then, they design the robotic elf to look at the order of Santa�s requirements, and partition work off to the group of worker elves accordingly. The toy is first sent to the elves who make things talk, then given to the elves that make them move, and so on, with each group independent of the other and each one doing its own specific task.

These sub-groups can also hand out tasks to further sub-groups: for example, the elves that make things move would first hand the toy to the elves that put on wheels, then hand the toy to elves that attach motors, and so on. Sub-groups can keep handing down tasks to smaller and smaller groups until they reach incredibly basic tasks, like tightening a bolt or nailing a nail. The end result is a toy that has been modified by each of these independent groups, with each one performing a very specific task without needing to know anything about any of the other groups. These sub-groups can also repeat their tasks for any other group, so the groups that make things move and that make things talk can have the same set of elves that hammer nails and tighten bolts.

A recursive descent parser looks for certain words or combinations of words in the input stream and uses that context to partition off work to sub-methods that are specialized in handling them. These sub-methods can either do the task or hand them off to their own sub-methods. Each sub-method then takes the result of those sub-methods and passes it on to other sub-methods, which carry out further work with their own specific ability. In this manner, the input is parsed word-by-word and handed out to the tasks that the parent method thinks can accomplish it.

## The Mathematica functions for parsing

The function below is called when the translator recognizes a subject-predicate sentence, which has a subject that performs some actions or declares its state in some way.

![](/img/building/swahili/1.jpg)

The parsing routine calls the function ParseSubject[], which returns a subject whose value is stored in the variable "subject". It looks to see if there is a conjunction (i.e. "and", "or", "but", � ), and if so, parses another subject and combines it with the first one. It then parses the predicate of the sentence, conjugates it, and joins it with the subject.

Notice that the only way to access words are through the global functions NextWord[] and PeekNextWord[] � we can�t look at words at the end of the sentence to help us out. These functions are taking words from an input stream, i.e. "my sister went to the store", and returning the next word it sees. If the function NextWord[] is called, the next word is returned and removed from the input stream, so that the next call to NextWord[] will give the word after that. Everything is accessed sequentially, a significant contribution to the elegance of a recursive descent parser.

Let�s look at one of the sub-methods, ParseSubject[].

![](/img/building/swahili/2.jpeg)

This function is very similar to the workshop analogy � if this is true, then hand out the work to this function, otherwise if this is true, hand out the work to this function, and so on. The `...Q` functions are boolean functions that return true if the word is in the specified database table. For example, `AdjectiveQ["happy"]` will return `True`, but `NounQ["sad"]` will return `False`. Abstraction of these functions to a separate database access/retrieval package allowed me to focus entirely on the parser and less on the actual data retrieval.

As you can see, this function also partitions its work off to other functions. Let�s look at the function `ParsePossessedNoun[]`, which is a function that does such a basic and specific task that it does not need to hand out work to other functions.

![](/img/building/swahili/3.jpeg)

This function, finally, pops words off of the input stream and translates them. In this function, the call to Possessive[ __ ] returns the Swahili translation of the word. For example, Possessive [ "my" ] will return "angu", which is conjugated based on the subject. For example, "my name" would turn into "jina langu". However, notice that this function doesn�t translate the noun � instead, it makes a call to ParseSubject[], the function that partitions work off to this function in the first place! Here is one of the most elegant qualities of a recursive descent parser- any function can call any other function, regardless of how high up or low down the function is in the chain of command. This way, recursive functions can easily be combined to address a large variety of possible inputs.

One interesting characteristic of a recursive descent parser is how the grammar of what it parses can be easily read. Even to a non-Swahili speaker, and even to a non-programmer, the functions above still make sense, and the logical flow of work partitioning can be easily understood.

![](/img/building/swahili/4.jpg)

All of my source code is on [GitHub](https://github.com/keshavsaharia/Swahili-Translator)!
