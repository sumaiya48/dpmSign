import React from 'react';

export default function MeetOurManagementTeam() {
  const team = [
    {
      name: 'Masum Chokder',
      position: 'CEO & Founder',
      img: '/assets/member1.png',
      email: 'ceo@dpmsign.com'
    },
    {
      name: 'Mofijuddin Chokder',
      position: 'Managing Director',
      img: '/assets/member2.png',
      email: 'info@dpmsign.com'
    },
    {
      name: 'Robiul Chokder',
      position: 'Head of Marketing',
      img: '/assets/member3.png',
      email: 'robiul@dpmsign.com'
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#45B6E7] via-[#4981C1] to-[#4B54A1] py-12 px-4 text-center">
      <h2 className="text-3xl font-bold  text-white">Meet Our Management Team</h2>
      <hr
          className="h-1 w-3/12 md:w-1/12 mb-10 bg-white mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative w-10/12 mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="bg-[#AACEE9] mt-28 p-6 rounded-xl shadow-md relative h-80 w-80">
            <img
              src={member.img}
              alt={member.name}
              className="w-60 h-60 mx-auto rounded-full object-cover mb-4 border-4 border-white absolute -top-24 left-9"
            />
            <div className='mt-40'>
                <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm ">{member.position}</p>
            <p className="text-sm text-gray-600 mt-1">{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
