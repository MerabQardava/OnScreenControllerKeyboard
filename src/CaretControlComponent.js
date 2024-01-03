import React, {useEffect, useRef, useState} from 'react';

function CaretControlComponent({letter,rightArrow,leftArrow,topArrow,bottomArrow,rightTrigger,leftTrigger}) {
// Ref to store the reference to the input element
    const inputRef = useRef();
    const [milliseconds, setMilliseconds] = useState(0);
    const [intervalId, setIntervalId] = useState()
    useEffect(() => {
        if(letter){

            insertLetterAtCaret(letter)
        }

    }, [letter]);

    useEffect(() => {
        // console.log("test")
        if(rightArrow===true){
            handleMoveRight()
        }

    }, [rightArrow]);
    useEffect(() => {
        // console.log(inputRef)
        // console.log("test")
        if(leftArrow===true){
            handleMoveLeft()
        }
    }, [leftArrow]);
    useEffect(() => {
        // console.log("test")
        if(topArrow===true){
            moveCaretToEnd()
        }
    }, [topArrow]);
    useEffect(() => {
        // console.log("test")
        if(bottomArrow===true){
            moveCaretToStart()
        }
    }, [bottomArrow]);
    // useEffect(() => {
    //     // console.log("test")
    //     if(rightTrigger===true){
    //         if(milliseconds>250){
    //
    //         }
    //     }
    // }, [rightTrigger]);

    useEffect(() => {
        if(rightTrigger){
            deleteAtCaret()
        }
    }, [rightTrigger, milliseconds>15?milliseconds:""]);

    useEffect(() => {
        // console.log("test")
        if(leftTrigger===true){
            insertSpaceAtCaret()
        }
    }, [leftTrigger]);

    useEffect(() => {
        let intervalId;


        if (rightTrigger) {
            // If startCounting becomes true, start or resume counting
            intervalId = setInterval(() => {
                setMilliseconds(prevMilliseconds => prevMilliseconds + 1);
            }, 50);
        } else {
            // If startCounting becomes false, reset the count to 0
            setMilliseconds(0);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [rightTrigger]);


    const moveCaretToStart = () => {
        moveCaret(0);
    };

    // Function to move caret to the end of the input
    const moveCaretToEnd = () => {
        if (inputRef.current) {
            const endIndex = inputRef.current.value.length;
            moveCaret(endIndex);
        }
    };

    const insertLetterAtCaret = (letter) => {
        if (inputRef.current) {
            const { selectionStart, selectionEnd, value } = inputRef.current;
            const newValue =
                value.substring(0, selectionStart) +
                letter +
                value.substring(selectionEnd);

            // Update the input value and move the caret after the inserted letter
            inputRef.current.value = newValue;
            const newPosition = selectionStart + 1;
            inputRef.current.setSelectionRange(newPosition, newPosition);
        }
    };


    // Function to move caret to the specified index
    const moveCaret = (index) => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(index, index);
        }
    };

    // Event handler for moving caret left
    const handleMoveLeft = () => {
        if (inputRef.current) {
            const currentIndex = inputRef.current.selectionStart;
            const newIndex = Math.max(0, currentIndex - 1);
            moveCaret(newIndex);
        }
    };

    // Event handler for moving caret right
    const handleMoveRight = () => {
        if (inputRef.current) {
            const currentIndex = inputRef.current.selectionStart;
            const newIndex = Math.min(inputRef.current.value.length, currentIndex + 1);
            moveCaret(newIndex);
        }
    };
    const deleteAtCaret = () => {
        if (inputRef.current) {
            const currentIndex = inputRef.current.selectionStart;
            if (currentIndex > 0) {
                const currentValue = inputRef.current.value;
                const newValue =
                    currentValue.slice(0, currentIndex - 1) + currentValue.slice(currentIndex);
                inputRef.current.value = newValue;
                moveCaret(currentIndex - 1);
            }
        }
    };

    // Function to insert a space at the caret location
    const insertSpaceAtCaret = () => {
        if (inputRef.current) {
            const currentIndex = inputRef.current.selectionStart;
            const currentValue = inputRef.current.value;
            const newValue = currentValue.slice(0, currentIndex) + ' ' + currentValue.slice(currentIndex);
            inputRef.current.value = newValue;
            moveCaret(currentIndex + 1);
        }
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your text"
                style={{ margin: '10px 0' }}
            />
            <div>
                <button onClick={handleMoveLeft}>Move Left</button>
                <button onClick={handleMoveRight}>Move Right</button>
            </div>
        </div>
    );
}

export default CaretControlComponent;