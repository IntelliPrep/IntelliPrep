def hi(inputString):
    newString = "Hewwo" + inputString
    return {
        "name": "newString",      
        "about" : "test"
    }
    
if __name__ == "__main__" and __package__ is None: #idek if this is needed
    __package__ = ".code.backend.algorithm.algo"