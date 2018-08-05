// Monkey patch on String

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("")
}

Array.prototype.last = function() {
  const arrayLength = this.length
  return this[arrayLength - 1]
}

function Phrase(content) {
  this.content = content

  this.processedContent = function processedContent() {
    return this.content.toLowerCase()
  }

  this.isPalindrom = function isPalindrome() {
    return this.processedConetnt() === this.processedContent().reverse()
  }

  this.isBlank = function isBlank() {
    return this.content.length <= 0
  }
}
