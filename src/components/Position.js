import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PositionItem from "./PositionItem";

const positionData = [

    {
        title: "Performance Engineer - SENAI CIMATEC",
        city: "Salvador - Bahia - Brazil",
        duration: "Sep 2014 - Dec 2019",
        tasks: [
            "Optimize code to run on High Performance Computing platforms.",
            "C/C++ programming with OpenMP, MPI, CUDA.",
            "HPC cluster configuration and testing."
        ]
    },

    {
        title: "C#/WPF Software Developer - Tatsoft",
        city: "Houston - Texas - United States (Remote work, based in Salvador - Bahia)",
        duration: "Jan 2017 - Jun 2018",
        tasks: [
            "Develop new features for the Factory Studio product using the .net framework",
            "Development of Factory Studio based automation applications for the company's clients.",
            "Maintenance of the Factory Studio product."
        ]
    },

    {
        title: "Software Developer - ION Trading",
        city: "Berlin - Germany",
        duration: "Sep 2014 - Dec 2019",
        tasks: [
            "GUI development for fix income pricing engine using .net platform(C#, WPF)."
        ]
    },
    
    {
        title: "Associate Consultant - Invensity GmbH",
        city: "Wiesbaden - Germany",
        duration: "Aug 2010 - Dec 2011",
        tasks: [
            "Consulting in software development(C#, WPF) for a client in the Biomedical branch",
            "Test driven development.",
            "Usage of various frameworks for desktop applications and data persistence(prism, nHibernate, unity container)."
        ]
    },
    
    {
        title: "C#/WPF Software Developer - Tatsoft",
        city: "São Paulo - São Paulo - Brazil",
        duration: "Jun 2008 - Nov 2009",
        tasks: [
            "Research, creation, specification and implementation of the architecture and modules that will compose the new SCADA system totally based on the dotnet technology.",
            "Use of Windows Presentation Foundation and Windows Communication Foundation API’s in the modules implementation."
        ]
    },    

    {
        title: "C/C++ Software Developer - Indusoft",
        city: "São Paulo - São Paulo - Brazil",
        duration: "Feb 2007 - May 2008",
        tasks: [
            "Maintenance, evolution and improvement of the InduSoft Web Studio product using C/C++ (MFC) and dotnet Framework.",
            "Customization of the product to OEM (international) partners.",
            "Programming of graphical, scripts, communication and engineering modules of the product."
        ]
    },
    
    {
        title: "Java Software Analyst/Developer - Xyztemas Consultoria e Serviços",
        city: "Salvador - Bahia - Brazil",
        duration: "Feb 2006 - Dec 2006",
        tasks: [
            "Analysis and development of a GIS software for monitoring environmental data concerning the reality of a agro industrial complex, using the following technologies: Java, JSP, TagLibs, Sybase(Database) and Eclipse IDE.",
            "Creation of UML and ER documents using Microsoft Visio."
        ]
    },

    {
        title: "C/C++ Software Developer (Interniship) - InWise Internet Company do Brasil S.A.",
        city: "Salvador - Bahia - Brazil",
        duration: "Feb 2005 - Oct 2005",
        tasks: [
            "Research, port, adapt and integrate cryptography and audio compression algorithms to the software architecture that was being developed by the company.",
            "Develop C/C++ code for diverse ends."
        ]
    },

    {
        title: "Jr. Programmer - Unitech Tecnologia da Informação",
        city: "Salvador - Bahia - Brazil",
        duration: "Sep 2003 - Apr 2004",
        tasks: [
            "Web development using the ASP.net(Webforms) technology, vb.net and C# languages.",
            "Development of procedures for the SQL Server database."
        ]
    }
];

const Position = () =>
    <>
    <Row style={{"margin-top": 20}}>
        <Col>
            <h2>Professional Experience</h2>
        </Col>
    </Row>
    {
        positionData.map(item => <PositionItem props={item} />)
    }
    </>

export default Position;