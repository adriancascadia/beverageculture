#!/usr/bin/env python3
"""
Generate a PDF timeline of Fred Sipper's career milestones
"""

from fpdf import FPDF
import os

class TimelinePDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 20)
        self.set_text_color(25, 82, 115)  # Primary blue color
        self.cell(0, 15, 'Fred Sipper: The Bottled Water King', 0, 1, 'C')
        self.set_font('Arial', 'I', 12)
        self.set_text_color(100, 100, 100)
        self.cell(0, 8, 'A Timeline of Innovation in American Beverage History', 0, 1, 'C')
        self.ln(5)
        
    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

    def add_milestone(self, year, title, description):
        # Year box
        self.set_fill_color(25, 82, 115)
        self.set_text_color(255, 255, 255)
        self.set_font('Arial', 'B', 14)
        self.cell(25, 10, str(year), 1, 0, 'C', True)
        
        # Title
        self.set_text_color(25, 82, 115)
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, f'  {title}', 0, 1)
        
        # Description
        self.set_text_color(60, 60, 60)
        self.set_font('Arial', '', 10)
        self.set_x(35)
        self.multi_cell(0, 5, description)
        self.ln(3)

def generate_timeline():
    pdf = TimelinePDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    
    # Introduction
    pdf.set_font('Arial', '', 11)
    pdf.set_text_color(60, 60, 60)
    pdf.multi_cell(0, 6, 
        "Fred Sipper revolutionized the American beverage industry by introducing premium bottled water "
        "and gourmet beverages to mainstream consumers. From a single grocery store in Manhattan to building "
        "the largest bottled water distribution empire in the USA, his vision and innovative marketing transformed "
        "how Americans think about hydration and premium beverages."
    )
    pdf.ln(8)
    
    # Milestones
    milestones = [
        {
            "year": "1960",
            "title": "The Beginning at Irving's Food Center",
            "description": "Fred Sipper begins selling Perrier at Irving's Food Center on Ninth Avenue, Manhattan. He purchases cases at a time and runs full-page New York Times advertisements promoting both Perrier and the store."
        },
        {
            "year": "1970s",
            "title": "Creating the First Bottled Water Section",
            "description": "Fred pioneers the concept of dedicated bottled water sections in supermarkets, creating the first-ever in-store water department. He successfully sells this revolutionary retail concept to NYC's top retailers and supermarket chains."
        },
        {
            "year": "1976",
            "title": "Founding Mootch and Muck",
            "description": "When Irving's Food Center becomes too small for the volume, Fred opens a warehouse and founds Mootch and Muck Inc. - named after his parents' affectionate nicknames for each other. The company becomes America's first major bottled water distribution company."
        },
        {
            "year": "1976-1988",
            "title": "Exclusive Evian Distributor",
            "description": "Mootch and Muck becomes the exclusive Evian distributor for the New York ADI (Area of Dominant Influence), partnering with Jack Maguire, first CEO of Evian USA."
        },
        {
            "year": "1979",
            "title": "Operations During Gas Crisis",
            "description": "New York Times reports Irving's Food Center operating 4 vans and 5 bicycles delivering mineral water, soft drinks, beer and groceries. Despite vans waiting in early morning gasoline lines, Fred maintains free deliveries, demonstrating unwavering customer commitment."
        },
        {
            "year": "Early 1980s",
            "title": "The Evian Waiter Program",
            "description": "Fred creates the revolutionary Evian Waiter Program, training restaurant staff to present Evian as a premium alternative to tap water. This innovation transforms bottled water from a specialty item to a standard restaurant offering."
        },
        {
            "year": "1985",
            "title": "NYC Water Crisis Response",
            "description": "During July 1985 NYC water contamination fears, Fred's business explodes. New York Times quotes him: 'We sold out a four-month supply of Evian water in two weeks.' Mootch and Muck distributes 33 brands to 4,000 establishments with sales more than doubling."
        },
        {
            "year": "1980s",
            "title": "Partnership with Jack Maguire",
            "description": "Fred teams up with Jack Maguire (former VP of Canada Dry, first CEO of Evian USA) to create the largest bottled water empire in the USA. Together they sponsor the NYC Marathon and run in Central Park wearing pink Evian shirts."
        },
        {
            "year": "1980s",
            "title": "Expanding Beyond Water",
            "description": "Mootch and Muck pioneers distribution of premium beverages including Clearly Canadian, Orbitz, Martinelli's apple juice, Orangina, Welch's, and legendary NYC gourmet sodas like Old Tyme Soda and SOHO Soda."
        },
        {
            "year": "1980s",
            "title": "Television Appearance",
            "description": "Fred appears on the popular game show 'To Tell The Truth,' bringing national attention to the bottled water industry and his pioneering role in making it mainstream."
        },
        {
            "year": "1990s",
            "title": "First Vitamin Water Distributor",
            "description": "Mootch and Muck becomes the first Vitamin Water distributor, once again ahead of the curve in identifying emerging beverage trends."
        },
        {
            "year": "1990s",
            "title": "San Pellegrino Distribution",
            "description": "Shares exclusive distribution rights to San Pellegrino with a food service distributor, bringing the iconic Italian sparkling water to New York consumers and restaurants."
        },
        {
            "year": "2000s",
            "title": "Industry Recognition",
            "description": "Smithsonian Magazine recognizes Fred Sipper as 'The Bottled Water King' for his transformative impact on American beverage culture."
        },
        {
            "year": "Present",
            "title": "Continuing Legacy",
            "description": "Fred continues consulting for beverage companies, distributors, and restaurants. His friendship with Jack Maguire endures, and his innovations remain foundational to the modern $200+ billion global bottled water industry."
        }
    ]
    
    for milestone in milestones:
        pdf.add_milestone(milestone["year"], milestone["title"], milestone["description"])
    
    # Brands section
    pdf.add_page()
    pdf.set_font('Arial', 'B', 16)
    pdf.set_text_color(25, 82, 115)
    pdf.cell(0, 10, 'Brands Distributed by Mootch and Muck', 0, 1, 'L')
    pdf.ln(3)
    
    # Premium Waters
    pdf.set_font('Arial', 'B', 12)
    pdf.set_text_color(25, 82, 115)
    pdf.cell(0, 8, 'Premium Bottled Waters:', 0, 1)
    pdf.set_font('Arial', '', 10)
    pdf.set_text_color(60, 60, 60)
    waters = [
        "Perrier", "Evian", "San Pellegrino", "Poland Spring", "Mountain Valley",
        "Aqua Panna", "Volvic", "Badoit", "Apollinaris", "Gerolsteiner",
        "SPA", "Contrexevelle", "Clearly Canadian", "Orbitz", "Saratoga", "Deer Park"
    ]
    pdf.multi_cell(0, 5, ", ".join(waters))
    pdf.ln(5)
    
    # Other Beverages
    pdf.set_font('Arial', 'B', 12)
    pdf.set_text_color(25, 82, 115)
    pdf.cell(0, 8, 'Pioneering Beverage Brands:', 0, 1)
    pdf.set_font('Arial', '', 10)
    pdf.set_text_color(60, 60, 60)
    beverages = [
        "Martinelli's Apple Juice", "Orangina", "Welch's",
        "Old Tyme Soda (legendary NYC gourmet soda)", "SOHO Soda", "Nice and Natural",
        "Vitamin Water (first distributor)"
    ]
    pdf.multi_cell(0, 5, ", ".join(beverages))
    
    # Footer note
    pdf.ln(10)
    pdf.set_font('Arial', 'I', 9)
    pdf.set_text_color(100, 100, 100)
    pdf.multi_cell(0, 5,
        "This timeline documents Fred Sipper's extraordinary journey from selling cases of Perrier "
        "to building America's premier bottled water distribution empire. His innovations - from creating "
        "the first supermarket water sections to the Evian Waiter Program - fundamentally changed American "
        "beverage culture and paved the way for today's multi-billion dollar industry."
    )
    
    # Save PDF
    output_path = '/home/ubuntu/beverageculture/client/public/fred-sipper-timeline.pdf'
    pdf.output(output_path)
    print(f"Timeline PDF generated successfully: {output_path}")
    return output_path

if __name__ == "__main__":
    generate_timeline()
