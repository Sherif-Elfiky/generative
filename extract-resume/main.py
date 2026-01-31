from pypdf import PdfReader as pdf

def extract_text():
    reader = pdf('Sherif-Elfiky.pdf')
    text = ''

    for page in reader.pages:
        text += page.extract_text() or '' # '' for empty pages
   
    return text

def write_to_file(text):
    with open('../resume.txt', 'w') as f:
        f.write(text)

resume = extract_text()
write_to_file(resume)






    
    