"use client"
import { useState, useEffect } from "react"
import type { ReviewType } from "../types/review"
import Image from "next/image"
import type { StaticImageData } from 'next/image';
import love from "@/public/love.gif"
import wow from "@/public/wow.gif"
import like from "@/public/like.gif"
import sad from "@/public/sad.gif"
import angry from "@/public/angry.gif"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts'
// import Contact from "./contact"

const avatarColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-amber-500",
];

function getColorFromString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
}

const reactions = [
  { name: 'sad', icon: sad, label: "Triste", color: "#8884d8" },
  { name: 'angry', icon: angry, label: "Grr", color: "#ff4d4f" },
  { name: 'like', icon: like, label: "J'aime", color: "#007aff" },
  { name: 'wow', icon: wow, label: "Wouah", color: "#ffbd3a" },
  { name: 'love', icon: love, label: "J’adore", color: "#f1576a" },
];

const reactionIcons: Record<string, StaticImageData> = {
  love,
  wow,
  like,
  sad,
  angry,
};
// {onData}: (data: any) => void
const Review = () => {
  const [name, setName] = useState<string>("")
  const [statut, setStatut] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [data, setData] = useState<ReviewType[]>([])
  const [list, setList] = useState(true)
  const [graph, setGraph] = useState(false)
  const [reaction, setReaction] = useState("");
  const [error, setError] = useState({
    name: false,
    statut: false,
    message: false,
    reaction: false
  })

  // const { data } = useReview()

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/review')
        const data = await res.json()
        setData(data)
      } catch (error: unknown) {
        console.log("Erreur lors de recuperation", error)
      }
    }
    fetchDoctors()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = {
      name: name === "",
      statut: statut === "",
      message: message === "",
      reaction: reaction === ""
    }
    setError(errors)
    if (errors.message || errors.name || errors.reaction || errors.statut) {
      return
    }
    const data = {
      name,
      statut,
      message,
      reaction,
    }
    const res = await fetch('/api/review', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (res.ok) {
      const updated = await fetch('/api/review')
      const updatedData = await updated.json()
      setData(updatedData)
      // onData(updatedData)
      setMessage("")
      setName("")
      setStatut("")
      setReaction("")
    } else {
      console.log("Il y une erreur")
    }
  }

  const handleList = () => {
    setList(true)
    setGraph(false)
  }

  const handleGraph = () => {
    setList(false)
    setGraph(true)
  }

  const chartData = reactions.map(r => ({
    name: r.label,
    count: data.filter(item => item.reaction === r.name).length,
    fill: r.color
  }));

  const reactionCounts = reactions.reduce((acc, curr) => {
    acc[curr.name] = data.filter(item => item.reaction === curr.name).length;
    return acc;
  }, {} as Record<string, number>);


  return (
    <section id="review">
      <div className="flex flex-wrap justify-center items-center gap-10 pt-10">
        {/* <div> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 bg-gray-300 text-black py-10 px-5 mx-5 rounded-lg lg:w-[28rem] md:w-[28rem] sm:w-full w-full">
          <h1 className="text-2xl font-sans flex justify-center text-center">Donnez votre avis</h1>
          {error.reaction && <h1 className="text-red-600 text-sm">Veillez choisir votre reaction 👇</h1>}
          <div className="flex justify-center gap-2 mb-4">
            {reactions.map((reaction_) => (
              <h1
                key={reaction_.name}
                onClick={() => setReaction(reaction_.name)}
                className={`transition-transform duration-300 ease-in-out 
            hover:scale-125 hover:animate-pulse
            ${reaction === reaction_.name ? "scale-150" : ""}
          `}
                title={reaction_.label}
              >
                <Image
                  src={reaction_.icon}
                  alt={reaction_.label}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </h1>
            ))}
          </div>

          <label>Votre nom ou nom de votre entreprise<span className="text-red-500">*</span></label>
          <div>
            <input
              value={name}
              className={`border-[1px] ${error.name ? "border-red-600" : "border-fuchsia-700"} rounded-md h-11 w-full p-1`}
              onChange={(e) => setName(e.target.value)}
            />
            {error.name && <h1 className="text-red-600 text-sm">Nom obligatoire</h1>}
          </div>

          <label>Votre statut (CEO, Tech Lead, Étudiant, ...)<span className="text-red-500">*</span></label>
          <div>
            <input
              value={statut}
              className={`border-[1px] ${error.statut ? "border-red-600" : "border-fuchsia-700"} rounded-md h-11 w-full p-1`}
              onChange={(e) => setStatut(e.target.value)}
            />
            {error.statut && <h1 className="text-red-600 text-sm">Statut obligatoire</h1>}
          </div>

          <label>Votre message<span className="text-red-500">*</span></label>
          <div>
            <textarea
              value={message}
              className={`border-[1px] ${error.message ? "border-red-600" : "border-fuchsia-700"} rounded-md h-20 w-full p-1`}
              onChange={(e) => setMessage(e.target.value)}
            />
            {error.message && <h1 className="text-red-600 text-sm">Message obligatoire</h1>}
          </div>

          <button className='bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] p-2 mt-2 w-full rounded-md text-white cursor-pointer' type="submit">
            Envoyez
          </button>
        </form>
        {/* </div> */}

        <div className="p-4 lg:w-[32rem] md:w-[32rem] sm:w-full w-full">
          <div className="flex justify-between items-center gap-4 mb-5">
            <h1 className="text-3xl">{data.length} <span className="font-[revert]">Avis</span></h1>
            <div className="bg-gray-400 rounded-xl">
              <button
                onClick={handleList}
                className={`${list ? 'bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] p-1.5' : 'bg-gray-400 p-1.5 text-black'} rounded-xl cursor-pointer text-sm `}
              >LISTE</button>

              <button
                onClick={handleGraph}
                className={`${graph ? 'bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] p-1.5' : 'bg-gray-400 p-1.5 text-black'} rounded-xl cursor-pointer text-sm`}
              >GRAPH</button>
            </div>
          </div>
          <hr className="pb-3" />

          {list ? (
            <div className="flex flex-col gap-2 max-h-[475px] overflow-y-auto pr-1 custom-scroll">
              {data.map((item, index) => (
                <div className="bg-gray-300 p-2 rounded-lg flex items-center gap-2.5" key={index}>
                  <div className="relative">
                    <div className={`w-13 h-13 rounded-full ${getColorFromString(item.name)} flex items-center justify-center text-white text-lg font-sans border-2 border-gray-300`}>
                      {item.name?.[0]?.toUpperCase() || ""}
                    </div>

                    {item.reaction && reactionIcons[item.reaction] && (
                      <img
                        src={reactionIcons[item.reaction].src}
                        alt={item.reaction}
                        className="absolute top-6 -right-2 w-8 h-8 rounded-full "
                      />
                    )}
                  </div>
                  <div>
                    <h1 className="text-black"><span className="font-semibold">{item.name}</span> - <span className="text-gray-500">{item.statut}</span></h1>
                    <h1 className="text-black text-sm">{item.message}</h1>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="bg-gray-300 flex justify-between p-1 rounded-lg">
                {reactions.map((reaction_, index) => (
                  <div key={index}>
                    <Image
                      src={reaction_.icon}
                      alt={reaction_.label}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <h1 className="text-center text-black">{reactionCounts[reaction_.name]}</h1>
                  </div>
                ))}
              </div>
              <div className="bg-gray-300 p-4 rounded-lg w-full h-[350px] sm:h-[400px] md:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" fontSize={15} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count">
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Review