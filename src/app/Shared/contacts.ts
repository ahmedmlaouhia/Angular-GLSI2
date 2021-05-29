import { Contact } from './contact';
export const CONTACTS: Contact[] = [
    {
        id: 1,
        name: "Doug Cutting",
        email: "doug.cutting@cloudera.com",
        website: "http://hadoop.apache.org/",
        projects : ["Nuch","Hadoop"],
        image : "./assets/images/doug_cutting.jpg",
        featured: true
    },
    {
        id: 2,
        name: "Bill Gates",
        email: "bill.gatesg@outlook.com",
        website: "https://www.gatesnotes.com/",
        projects : ["Microsoft","Windows"],
        image : "./assets/images/bill_gates.jpg",
        featured: true
    },
    {
        id: 3,
        name: "Mark Zuckerberg",
        email: "bill.gatesg@facebook.com",
        website: "https://www.mark-zuckerberg.com/",
        projects : ["Facebook","Instagram"],
        image : "./assets/images/mark_zuckerberg.jpg",
        featured: true
    }
]

